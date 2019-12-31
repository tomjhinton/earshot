from app import db
from pony.orm import Required, Optional, Set
from marshmallow import Schema, fields, post_load
from datetime import datetime, timedelta




class Sound(db.Entity):
    title = Required(str)
    cover = Optional(str)
    description = Optional(str)
    embed = Optional(str)
    url = Optional(str)
    long = Required(float)
    lat = Required(float)
    createdBy = Required('User')



class SoundSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str()
    cover = fields.Str()
    embed = fields.Str()
    url = fields.Str()
    description = fields.Str()
    long = fields.Float()
    lat = fields.Float()
    createdBy = fields.Nested('UserSchema', exclude=('sounds', 'email'), dump_only=True)
