# Use the official MySQL image from Docker Hub
FROM mysql:8.0

# Set environment variables for MySQL root user and password
# It's recommended to set this in a secure way in production
ENV MYSQL_ROOT_PASSWORD="testgg44"
ENV MYSQL_DATABASE=my_database


# Expose MySQL port
EXPOSE 3307

# Copy any custom configuration (if needed) into the container
# COPY my_custom.cnf /etc/mysql/my.cnf

# (Optional) Set a working directory if you need to copy SQL scripts
# WORKDIR /docker-entrypoint-initdb.d

# Start MySQL server
# CMD ["mysqld"]

# docker build -t mysql-img .
# docker run --name mysql-container -p 3307:3306 -d mysql-img
