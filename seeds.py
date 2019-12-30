from pony.orm import db_session
from app import db
from models.Sound import Sound
from models.User import User, UserSchema

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():






    createdBy = User(
    username='Tom',
    email='tomjhinton@gmail.com',
    password_hash=UserSchema().generate_hash('pass')
    )



    Sound(
        title = 'Tate Modern',
        cover = '',
        description = '',
        embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/735425458&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        url = '',
        long = 0.0,
        lat = 0.0,
        createdBy=createdBy
    )


    Sound(
        title = 'Suffolk Bird Noise',
        cover = '',
        description = '',
        embed='<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/735426004&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        url = '',
        long = 0.0,
        lat = 0.0,
        createdBy=createdBy
        )

    Sound(
        title = 'Deptford Creek',
        cover = '',
        description = '',
        embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/735422386&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        url = '',
        long = 0.0,
        lat = 0.0,
        createdBy=createdBy
    )

    Sound(
        title = 'Turin Bells',
        cover = '',
        description = '',
        embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/735420739&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        url = '',
        long = 0.0,
        lat = 0.0,
        createdBy=createdBy
    )

    db.commit() # Writes the SQL and runs it against the db
