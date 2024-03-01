function customeRender (reactElement,container){
  
  
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.targer);

    // container.appendChild(domElement);


    const domElemnt = document.createElement(reactElement.type)
    domElemnt.innerHTML = reactElement.children
    for(const prop in reactElement.props){
       if(prop == 'children') continue;
       domElemnt.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElemnt)
}

const reactElement = {
    type:'a',
    props:{
        href:'https//google.com',
        targer:'_blank'
    },
    children:'Click to me visit google'
}

const mainContainer = document.querySelector('#root')

customeRender(reactElement, mainContainer);
