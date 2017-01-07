# my-first-plugin
Squeezer plugin example

### Download the plugin

```bash
$ cd YOUR_PROJECT/plugins
$ git clone git@github.com:SqueezerIO/my-first-plugin.git
```

### Add the plugin to your project 

`YOUR_PROJECT/squeezer.yml`

```yaml
plugins:
  - name: my-first-plugin
    path: plugins
```

### Check to see if the plugin is hooked to the `deploy` command

NOTE : you should see `--msg` option attached to the `deploy` command

```
$ sqz help deploy
```