# Commands

Run container from image hello-world

`docker run <image name>`

```bash  
docker run hello-world
```

Overide default image start command

`docker run <image name> <command>`

```bash
docker run busybox echo hi there 
docker run busybox ls 
```

Listing running containers

`docker ps`

docker run

`docker run` = `docker create <image name>` + `docker start <container id>`

```bash
docker create hello-world
> id
docker start -a <id>
```

-a - read content from container

`docker ps --all(-a)` - list all containers

`docker start <id>` - start container by id
`docker start -a <id>` - start container by id with logs

`docker system prune` - remove everything

`docker logs <id>` - Retrieving Output Logs

`docker stop <id>` - soft stop (sigterm)
`docker kill <id>` - hard stop (sigkill)

`docker exec -it <id>` - run command inside container
-i - connect to terminal
-t - formating

`docker exec -it <id> sh` - run terminal inside container

`docker commit -c 'CMD "redis-server"' <id>` - take a container snapshot

`docker run -p <pcPort>:<containerPort> <id>` - port mapping
