from app import db
from pony.orm import Required, Optional, Set
from marshmallow import Schema, fields, post_load
from datetime import datetime, timedelta




class Sound(db.Entity):
    artist = Required(str)
    title = Required(str)
    cover = Optional(str)
    description = Required(str)
    embed = Optional(str)



class SoundSchema(Schema):
    id = fields.Int(dump_only=True)
    artist = fields.Str(required=True)
    title = fields.Str()
    cover = fields.Str()
    embed = fields.Str()
    description = fields.Str(required=True)
