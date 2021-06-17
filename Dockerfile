FROM java:jre-alpine

RUN apk add --update --no-cache unzip wget

RUN wget http://nlp.stanford.edu/software/stanford-corenlp-4.0.0.zip
RUN unzip stanford-corenlp-4.0.0.zip && rm stanford-corenlp-4.0.0.zip

WORKDIR stanford-corenlp-4.0.0

RUN export CLASSPATH="`find . -name '*.jar'`"

CMD java -mx4g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer -port $PORT -timeout 15000