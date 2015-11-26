FROM vaijab/nodejs:0.12.7

RUN useradd -d /app app
RUN mkdir -p /public

WORKDIR /app
COPY package.json /app/package.json
COPY assets /app/assets
RUN npm install
COPY . /app

RUN chown -R app:app . /public
USER app
RUN npm run hof-transpile
EXPOSE 8080

CMD ./run.sh
