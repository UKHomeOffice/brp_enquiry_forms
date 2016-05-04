FROM quay.io/ukhomeofficedigital/centos-base

RUN mkdir -p /opt/nodejs /app

WORKDIR /opt/nodejs

ENV NODE_VERSION v4.2.2
RUN yum install -y git curl && \
    curl https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.gz | tar xz --strip-components=1
ENV PATH=${PATH}:/opt/nodejs/bin
RUN yum clean all && yum update -y && yum clean all && rpm --rebuilddb

RUN /usr/sbin/useradd --create-home --home-dir /app --shell /bin/bash app
RUN mkdir /public
RUN chown -R app /app /public
USER app

WORKDIR /app
COPY package.json /app/package.json
COPY assets /app/assets
ENV HOME /app
RUN npm install
COPY . /app

USER root
RUN npm install -g nodemon

EXPOSE 8080
VOLUME /public

RUN chown -R app /app /public
USER app

# USER app
ENTRYPOINT [ "/app/run.sh" ]
