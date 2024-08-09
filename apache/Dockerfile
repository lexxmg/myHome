FROM php:8.3-apache

RUN apt update
RUN apt install iputils-ping -y

# # ip адрес и порт (если нужен нестандартный)
# # для https соеденения
# ENV SERVER_NAME=192.168.0.11:3016
# 
# # Точка входа для Laravel
# ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
# 
# Устанавливаем зависимости
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libpq-dev \
    libonig-dev \
    libzip-dev 

# RUN apt-get -y install cron
# COPY cron /etc/cron.d/cron
# RUN chmod 0644 /etc/cron.d/cron
# RUN crontab /etc/cron.d/cron

# Очищаем кэш
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# 
# # Устанавливаем расширения PHP
# RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
# 
# 
# RUN openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
# RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/certs/self.key -out /etc/ssl/certs/self.crt -subj "/C=RU/ST=Moscow/L=.../O=.../OU=Org/CN=${SERVER_NAME}";
# 
# COPY ssl/ssl-params.conf /etc/apache2/conf-available/ssl-params.conf
# COPY apache-conf/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf
# COPY apache-conf/000-default.conf /etc/apache2/sites-available/000-default.conf
# 
# RUN sed -ri -e "s!IP_ADDRESS!${SERVER_NAME}!g" /etc/apache2/sites-available/default-ssl.conf
# RUN sed -ri -e "s!IP_ADDRESS!${SERVER_NAME}!g" /etc/apache2/sites-available/000-default.conf
# 
# RUN sed -ri -e "s!/var/www/html!${APACHE_DOCUMENT_ROOT}!g" /etc/apache2/sites-available/*.conf
# RUN sed -ri -e "s!/var/www/!${APACHE_DOCUMENT_ROOT}!g" /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
# 
# 
# RUN a2enmod ssl
# RUN a2enmod headers
# RUN a2ensite default-ssl
# RUN a2enconf ssl-params
# RUN a2enmod rewrite
# RUN service apache2 restart
# 
# EXPOSE 80
# EXPOSE 443