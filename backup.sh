#!/bin/bash

cd $APP_HOME
TIMESTAMP=`date +"%s"`
BACKUP_FOLDER=$DEST/$TIMESTAMP
mkdir $BACKUP_FOLDER
echo "backup folder is $BACKUP_FOLDER"
docker-compose exec postgres_host pg_dump -U docker trend > $BACKUP_FOLDER/database.sql
cp ./public/images/system/* $BACKUP_FOLDER
