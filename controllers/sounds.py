from flask import Blueprint, request, jsonify, abort, g
from pony.orm import db_session
from marshmallow import ValidationError
from app import db
from models.Sound import Sound, SoundSchema
from lib.secure_route import secure_route


router = Blueprint(__name__, 'sounds')

@router.route('/sounds', methods=['GET'])
@db_session
def index():
    schema = SoundSchema(many=True)
    sounds = Sound.select()
    return schema.dumps(sounds)


@router.route('/sounds', methods=['POST'])
@db_session
def create():
    schema = SoundSchema()

    try:
        data = schema.load(request.get_json())
        sound = Sound(**data, createdBy=g.current_user)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(sound), 201


@router.route('/sounds/<int:sound_id>', methods=['GET'])
@db_session
def show(sound_id):
    schema = SoundSchema()
    sound = Sound.get(id=sound_id)

    if not sound:
        abort(404)

    return schema.dumps(sound)


@router.route('/sounds/<int:sound_id>', methods=['PUT'])
@db_session
@secure_route
def update(sound_id):
    schema = SoundSchema()
    sound = Sound.get(id=sound_id)

    if not sound:
        abort(404)

    try:
        data = schema.load(request.get_json())
        sound.set(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(sound)


@router.route('/sounds/<int:sound_id>', methods=['DELETE'])
@db_session
@secure_route
def delete(sound_id):
    sound = Sound.get(id=sound_id)

    if not sound:
        abort(404)

    sound.delete()
    db.commit()

    return '', 204
