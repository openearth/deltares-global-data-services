//create custom drawrectangle control
class DrawRectangleCtrl {
  constructor(draw){
    this.draw = draw;
  }
    
  onAdd(map){
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = "draw_rectangle-control mapboxgl-ctrl";
    const button = this._createButton('draw_rectangle')
    this.container.appendChild(button);
    return this.container;
  }

  onRemove(){
    this.container.parentNode.removeChild(this.container);
    this.map = undefined;
  }

  _createButton(className) {
    const el = window.document.createElement('div')
    el.className = className;
    el.addEventListener('click', (e) => {
        this.draw.deleteAll();
        this.draw.changeMode('draw_rectangle');
      // e.preventDefault()
      e.stopPropagation()
    }, false)
    return el;
  }
}

//create custom hamburger menu control
class HamburgerButtonCtrl {
  onAdd(map){
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = "draw_rectangle-control mapboxgl-ctrl";
    const button = this._createButton('draw_rectangle')
    this.container.appendChild(button);
    return this.container;
  }

  onRemove(){
    this.container.parentNode.removeChild(this.container);
    this.map = undefined;
  }

  _createButton(className) {
    const el = window.document.createElement('button')
    el.className = className;
    el.textContent = 'Select';
    el.addEventListener('click', (e) => {
        console.log(e);
        draw.deleteAll();
        draw.changeMode('draw_rectangle');
      // e.preventDefault()
      e.stopPropagation()
    }, false)
    return el;
  }
}

//create custom login control
class LoginCtrl {
  onAdd(map){
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = "login-control mapboxgl-ctrl";
    const button = this._createButton('login');
    this.container.appendChild(button);
    return this.container;
  }

  onRemove(){
    this.container.parentNode.removeChild(this.container);
    this.map = undefined;
  }

  _createButton(className) {
    const el = window.document.createElement('div')
    el.className = className;
    el.textContent = 'Login';
    el.addEventListener('click', (e) => {
        console.log(e);
        
      // e.preventDefault()
      e.stopPropagation()
    }, false)
    return el;
  }
}

//create custom layermenu control
class DrawLayerMenuCtrl {
  onAdd(map){
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = "draw_rectangle-control mapboxgl-ctrl";
    const button = this._createButton('draw_rectangle')
    this.container.appendChild(button);
    return this.container;
  }

  onRemove(){
    this.container.parentNode.removeChild(this.container);
    this.map = undefined;
  }

  _createButton(className) {
    const el = window.document.createElement('button')
    el.className = className;
    el.textContent = 'Select';
    el.addEventListener('click', (e) => {
        console.log(e);
        draw.deleteAll();
        draw.changeMode('draw_rectangle');
      // e.preventDefault()
      e.stopPropagation()
    }, false)
    return el;
  }
}