FROM quay.io/ukhomeofficedigital/nodejs:v4.4.2

USER nodejs

EXPOSE 8080
CMD /app/run.sh