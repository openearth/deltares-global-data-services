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
class ToggleElementButtonCtrl {
    constructor(el, className){
    this.element = el;
    this.className = (className) ? className : "";
  }
    
  onAdd(map){
    this.map = map;
    this.container = document.createElement('div');
    this.container.className = "toggle_element-control mapboxgl-ctrl ";
    const button = this._createButton('toggle_element '+this.className);
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
        console.log(e);
        if (this.element.classList.contains("visible"))
        {
            this.element.classList.remove("visible");
        }
        else
        {
            this.element.classList.add("visible");
        }
      // e.preventDefault();
      e.stopPropagation();
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
class LayerMenuCtrl {
    
    constructor(){
        this.maplayers = [];
        this.className = 'layermenu';
    }
    
    onAdd(map){
        this.map = map;
        this.container = document.createElement('div');
        this.container.className = "layermenu-control mapboxgl-ctrl";
        const button = this._createButton();
        this.container.appendChild(button);
        return this.container;
    }

    onRemove(){
        this.container.parentNode.removeChild(this.container);
        this.map = undefined;
    }

    addLayer(name,layersArray)
    {
       
        this.maplayers.push({
            layername: name,
            layerList: layersArray,
            visible:true,
        })
        this._addLayers(layersArray);
    }
    
    removeLayers(name)
    {
       for (var i=0 ;i<this.maplayers.length;i++)
        {
            if (this.layername === name)
            {
                for (var j=0 ;j<this.maplayers.layersList.length;j++)
                {
                    this.map.removeLayer(this.maplayers.layersList[j].id)
                    this.map.removeSource(this.maplayers.layersList[j].id);
                }
                return this.maplayers.splice(i, 1);
            }
        }
        return null;
    }
    
    _hideLayers(layersList)
    {
        for (var i=0 ;i<layersList.length;i++)
        {
            this.map.setLayoutProperty(layersList[i].id, 'visibility', 'none');
            //this.map.removeLayer(layersList[i].id)
            //this.map.removeSource(layersList[i].id);
        }
    }
    
    _addLayers(layersList)
    {
         //add layers to map
        for (var i=0 ;i<layersList.length;i++)
        {
            this.map.addLayer(layersList[i]);
        }
    }
    
    _showLayers(layersList)
    {
        for (var i=0 ;i<layersList.length;i++)
        {
            //this.map.addLayer(layersList[i]);
            this.map.setLayoutProperty(layersList[i].id, 'visibility', 'visible');
        }
    }
    
    _createButton() {
        const el = window.document.createElement('div')
        el.className = this.className;
        el.addEventListener('click', (e) => {
            //console.log(e);
            this.toggleList();
          // e.preventDefault()
          e.stopPropagation()
        }, false)
        return el;
    }
    
    hideList()
    {
        if(document.getElementsByClassName(this.className+"-list").length > 0)
        {
            document.getElementsByClassName(this.className+"-list")[0].remove();
        }
    }
    
    toggleList()
    {
         if(document.getElementsByClassName(this.className+"-list").length > 0)
         {
             this.hideList()
         }
        else
        {
            this.showList()
        }
    }
    
    showList()
    {
        if(document.getElementsByClassName(this.className+"-list").length <= 0)
        {
            var list = this._createList(this.className+"-list");
            this.container.appendChild(list);
        }
    }
    
    _createLayerItem(layerObject)
    {
        var listItem = window.document.createElement('li');
        var title = window.document.createElement('span');
        title.textContent = layerObject.layername;
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = true;
        
        listItem.appendChild(title);
        listItem.appendChild(checkbox);
                
        checkbox.addEventListener('change', (e) => {
             //console.log(e, checkbox.value);
             if (checkbox.checked)
             {
                 this._showLayers(layerObject.layerList);
             }
             else
             {
                  this._hideLayers(layerObject.layerList); 
             }
          // e.preventDefault()
          e.stopPropagation()
        }, false)
        
        return listItem;
    }
    
    _createList(className) {
        const el = window.document.createElement('div')
        el.className = className;
        var listEl = window.document.createElement('ul')
        el.appendChild(listEl);
        
        for (var i = 0; i<this.maplayers.length;i++)
        {
            var layerItem = this._createLayerItem(this.maplayers[i]);
            listEl.appendChild(layerItem);
        }
               
        return el;
    }
}