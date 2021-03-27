![plugin v0.6.0](https://img.shields.io/badge/plugin-v0.2.3-brightgreen.svg?style=flat-square) 
## vnjson-jump

### Install
[download](https://github.com/vnjson/vnjson-jump/archive/v0.8.0.zip)
or
```bash
  git clone https://github.com/vnjson/vnjson-jump
  
```

### Usage

__`chapter1.yaml`__


```yaml
- print: hello
  background: img3
- print: world!
- jump: chapter2
```

__`chapter2.yaml`__

```yaml
- print: hello
  background: img3
- print: world!
- jump: volume2.start
```

__`volume2/start`__

```yaml
- print: game over
  background: go

```

__`program`__

```js
vnjs.exec({
        jump: 'scene.label'
      });

vnjs.exec({jump: 'label'});
vnjs.emit('jump', 'scene.label')
```


## License 
> MIT License (MIT)
