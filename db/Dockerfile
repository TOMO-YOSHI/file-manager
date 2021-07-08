# pull official base image
FROM mysql:5.7

# The maintainer name and email
MAINTAINER Tomohiro Yoshida <tomohiroyoshida10@gmail.com>

# environment
ENV MYSQL_ROOT_PASSWORD="password"
ENV MYSQL_DATABASE="file_manager"
ENV MYSQL_USER="user"
ENV MYSQL_PASSWORD="password"

# Copy files
COPY ./mysql/data /var/lib/mysql

EXPOSE 3333
