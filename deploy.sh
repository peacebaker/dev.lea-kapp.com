#!/bin/bash

# constants
dev_dir='/home/tbg/lea-kapp.com'
live_ssh='tbg@165.227.110.128'
live_dir='/home/tbg/lea-kapp.com'

# exclude files list
exclude="--exclude=/db.sqlite3 "
exclude+="--exclude=/deploy.sh "
exclude+="--exclude=/.idea "
exclude+="--exclude=/sources.txt "
exclude+="--exclude=/todo.txt "
exclude+="--exclude=lea_kapp/settings/__init__.py "
exclude+="--exclude=**/migrations/**.py "
exclude+="--exclude=**/migrations/**.pyc "
exclude+="--exclude=**/__pycache__/ "

# shellcheck disable=SC2086
# copy site files to server
rsync -avHPe ssh $exclude "${dev_dir}/" "${live_ssh}:${live_dir}/"

# The static directory shouldn't have any extra garbage in there.
rsync -avHPe ssh --delete "${dev_dir}/static/" "${live_ssh}:${live_dir}/static/"

# Make and apply migrations.  Deploy static files.
