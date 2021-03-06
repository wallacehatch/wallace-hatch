
docker-machine create --driver amazonec2 --amazonec2-instance-type t2.micro wallace-hatch-frontend

docker stop $(docker ps -a -q)
docker build -t name .
docker run -p 80:5000 -d --restart always  name