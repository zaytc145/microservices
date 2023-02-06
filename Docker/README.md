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

`docker ps --all` - list all containers

`docker start <id>` - start container by id
`docker start -a <id>` - start container by id with logs

`docker system prune` - remove everything

`docker logs <id>` - Retrieving Output Logs

`docker stop <id>` - soft stop (sigterm)
`docker kill <id>` - hard stop (sigkill)
