FROM ubuntu:trusty

MAINTAINER ruslan.kiricenko@locatory.com

RUN apt-get update
RUN apt-get -y upgrade

# Install apache and supplimentary programs.
RUN apt-get -y install apache2  mc


RUN rm /etc/apache2/sites-available/000-default.conf
RUN rm /etc/apache2/sites-enabled/000-default.conf
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

COPY default.conf /etc/apache2/sites-enabled/default.conf

VOLUME /var/www

ENV TERM xterm
EXPOSE 80 3306

ENTRYPOINT /usr/sbin/apache2ctl -D FOREGROUND
# By default start up apache in the foreground, override with /bin/bash for interative.
CMD ["/usr/sbin/apache2ctl", "-D" "FOREGROUND"]


