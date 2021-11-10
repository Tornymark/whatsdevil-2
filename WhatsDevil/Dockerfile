FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/Tornymark/whatsdevil-2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/mayadev20/files
RUN git clone https://github.com/jesonpro/Angela-x
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated
CMD ["node", "bot.js"]
