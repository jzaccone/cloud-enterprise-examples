(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{KVeZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=r("Row"),c=r("Column"),p=r("ResourceCard"),b=r("ArtDirection"),m={_frontmatter:s},u=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(u,i({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"To complement the IBM Cloud for Garage Development Tools this project provides\na set of ",Object(n.b)("strong",{parentName:"p"},"Code Patterns"),". These have been designed to give a production ready\nentry point for cloud native development. While the use of the ",Object(n.b)("strong",{parentName:"p"},"Code Patterns\n")," is not required to be able\nto use the development tools, their use is ",Object(n.b)("strong",{parentName:"p"},"highly recommended"),"."),Object(n.b)("p",null,"There are a small number of ",Object(n.b)("strong",{parentName:"p"},"Code Pattern")," git repositories that provide\nsupport for\ndifferent\narchitecture layers of your cloud native\nsolution these includes:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"User Interfaces"),Object(n.b)("li",{parentName:"ul"},"Backend for Front-ends"),Object(n.b)("li",{parentName:"ul"},"Microservices")),Object(n.b)("p",null,"You can pick the ",Object(n.b)("strong",{parentName:"p"},"Code Pattern")," that best meets your requirements and it will\nseamlessly integrate\nwith the installed development tools."),Object(n.b)("p",null,"You can work with more ",Object(n.b)("a",i({parentName:"p"},{href:"https://developer.ibm.com/patterns/"}),"Code Patterns")," from\n",Object(n.b)("a",i({parentName:"p"},{href:"https://developer.ibm.com/"}),"developer.ibm.com"),".\nThese patterns can be “enabled” using the ",Object(n.b)("inlineCode",{parentName:"p"},"Bring your own code")," approach on\n",Object(n.b)("a",i({parentName:"p"},{href:"src/pages/codepatterns/gitrepos"}),"Code Patterns Docs"),".\nEven though they are “enabled” they are not optimised for production usage and do not include a number of key IBM Garage best practices.\nThey are fully open source and they can be enhanced overtime."),Object(n.b)("p",null,"You can also work with the ",Object(n.b)("strong",{parentName:"p"},"Code Patterns")," provided from the IBM Cloud\n",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/developer/appservice/starter-kits"}),"IBM Cloud Code Patterns")," for\nthe server side patterns you can “enabled” these using the ",Object(n.b)("inlineCode",{parentName:"p"},"Bring your own\n   code")," approach on ",Object(n.b)("a",i({parentName:"p"},{href:"src/pages/codepatterns/gitrepos"}),"Code Patterns Docs")),Object(n.b)("p",null,"There is more information below on what is included in the ",Object(n.b)("strong",{parentName:"p"},"Code Patterns"),"."),Object(n.b)("h2",null,"Code Patterns Links"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Code Patterns")," provide a perfect on ramp to help projects get started. The Developer Tools project is providing a set of seed templates that can be used to get projects moving quickly and focusing on use case business logic."),Object(n.b)("p",null,"Here are links to the base set of ",Object(n.b)("strong",{parentName:"p"},"Code Patterns")," provided for the ",Object(n.b)("em",{parentName:"p"},"IBM Garage for Cloud Developer Tools"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To use the Code Patterns, click on the link and then the ",Object(n.b)("strong",{parentName:"p"},"Template")," button to create a version in your own git organization.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Then clone it onto your local machine and then use ",Object(n.b)("inlineCode",{parentName:"p"},"igc pipeline")," to register it with your Jenkins server."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'ibmcloud login -r us-east -g gsi-cloudnative-dev-squad\nkubectl get pods\nnpm install -g @ibmgaragecloud/cloud-native-toolkit-cli\ngit clone <code pattern> | cd <code pattern>\nkubectl enable | git add . | git commit -m "Update"" | git push\nkubectl sync <namespace> --dev\nkubectl pipeline\n')))),Object(n.b)("h3",null,"Git Repo Links"),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"React UI Patterns",subTitle:"Carbon based UI to help with common patterns using React framework",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-react",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Angular UI Patterns",subTitle:"Carbon based UI to help with common patterns using Angular framework",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-angular",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Typescript Microservice",subTitle:"Node.js TypeScript Microservice offering OpenAPI endpoints",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-typescript",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Typescript GraphQL",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-graphql-typescript",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Spring Boot Microservice",subTitle:"Spring Boot Java Microservice",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-java-spring",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Tekton Tasks",subTitle:"Set of Tekton Tasks and Pipelines to support CI/CD with OpenShift",actionIcon:"launch",color:"light",href:"https://github.com/IBM/ibm-garage-tekton-tasks",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"ArgoCD GitOps",subTitle:"Template configuration to help to set up GitOps with ArgoCD",actionIcon:"launch",color:"light",href:"https://github.com/IBM/template-argocd-gitops",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cloud-enterprise-examples/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(c,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Bring your own code",subTitle:"Enable an existing project or a custom code pattern with pipeline logic",actionIcon:"launch",color:"light",href:"https://cloudnativetoolkit.dev/getting-started/cli#enable",mdxType:"ResourceCard"}))),Object(n.b)("h2",null,"Why another Code Pattern"),Object(n.b)("p",null,"As teams have built out production solutions using IBM Kubernetes Services and RedHat OpenShift\non the IBM Cloud it has became clear that starting with a ",Object(n.b)("inlineCode",{parentName:"p"},"hello-world\n")," style code pattern slows down an agile team."),Object(n.b)("p",null,"In cases where you are learning the basic principles of cloud native development with a specific language it does help\nto start with the basic principles of ",Object(n.b)("inlineCode",{parentName:"p"},"hello-world")," but when you are building production code to be used by real users\nit takes a lot of effort to industrialize this code ready for production."),Object(n.b)("p",null,"The objective of these ",Object(n.b)("em",{parentName:"p"},"Code Patterns")," is to kick off a project quickly so\nthey can reach maximum development\nvelocity in the least amount of time. To not contain any business logic and to have a set of proven opinionated\nframeworks that are commonly used in the industry this can include ",Object(n.b)("inlineCode",{parentName:"p"},"Express"),", ",Object(n.b)("inlineCode",{parentName:"p"},"React")," and testing frameworks."),Object(n.b)("p",null,"Why Code Patterns ? As the approach to cloud native microservice development has evolved\na number of language frameworks have come into play, runtime configuration technologies and best practices\nto improve quality and robustness. It becomes very time consuming to create, manage and maintain these elements."),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(c,{colMd:2,colLg:5,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)("p",null,"If we look at a typical cloud native app, they require a number of supporting files, similar to the ones\nfound in the outer ring of this diagram. They take time to create and are only often needed for the initial\nseed of the project. Its also never clear where the documentation is for these elements and how they are work together."),Object(n.b)("p",null,"Some typical examples :"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Dockerfile"),Object(n.b)("li",{parentName:"ul"},"Helm chart"),Object(n.b)("li",{parentName:"ul"},"CI pipeline (",Object(n.b)("a",i({parentName:"li"},{href:"/cloud-enterprise-examples/guides/continuous-integration"}),"Jenkins"),", ",Object(n.b)("a",i({parentName:"li"},{href:"/cloud-enterprise-examples/guides/continuous-integration-tekton"}),"Tekton"),", etc.)"),Object(n.b)("li",{parentName:"ul"},"TDD Frameworks"),Object(n.b)("li",{parentName:"ul"},"Code Analysis"),Object(n.b)("li",{parentName:"ul"},"Monitoring / Logging Support"),Object(n.b)("li",{parentName:"ul"},"Cloud Service bindings and credentials"),Object(n.b)("li",{parentName:"ul"},"User Case logic UI, BFF, Microservice")),Object(n.b)("p",null,"The Code Patterns provide a key number of these supporting files and meta data\nand are tested on every code change to make sure they work with IBM\nKubernetes and IBM Red Hat OpenShift managed clusters environments.")),Object(n.b)(c,{colMd:2,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(b,{mdxType:"ArtDirection"},Object(n.b)("h2",null,"Code Pattern Template"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"400px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFf0lEQVQ4yz2UaVBTVxTHn/qlM+10pl/6vTNtp6PtTPuh05m61C5YPihF3KpFW5fpDi1LWI1sZZWAgA0kEuKGC0iAsIcAgRCCBihBBQRBBUJC3FoJebzcl/PvC6h35sw9d+45v/s/Z+69XEL1LBcYOwrH1wBYE/C35d58vbjddayix62X5vm8ZqeoNT9kapN7trzbXaPscB1cE979SiBWylm7IXF4hRF16cHKzIWr7q7hno/SDtf3yo6FmbpbDPKGp4i+Oo/IyhmoTA+RrHMhrvYpCjoXcabbPZHVMBf2HMptyxtbZYQWjb+Eac3uUqXZi18rnchtcrIcyf7Sz+Ow5j6ym1xIq3NQer2DRVycYZFXFnB1iMcFy8OsF9CP5PYVZwUolaZsmQASr80xuc4hptc7Udb9RFo7fCm1DlZpfcxS653sx3OzOKi+h+M1DvGUYUEs7ROg6lrICDAWl2ntapmdrvCyXi/C1feYyuT2p+ldSKpxCNqO+4+StANPDuf3PDuiMHviNQMehX7am653+k+1uxFzZdZ/THvfr+pdRJHBGbwCeyvC8tpp48J0xBUXMvTz4lHtDGpsjz0p5wddn8uafd+kduJAdjf2Z5uwK6MTQQktYn71yHKRpG63chqJ1XPsj6tulHYs2Gs7J1/l/plZOlFjF5BYNcviq+Ygr50XkrSDrk3RzfgqwYCQlE46WmilIwVW2p1hoqBEAz79sxFplXafrMpBRzXTASHMPAPYF3w/c1Ujy9eKh4DTFg/TWBehMT5wB8W3CIHEneldlHLWgtjiaxRXoqPkij5sP9FJQQltCE5spXOmOX/lCI+KW4xdmgX0U6yQU133ThyrF/C73oP8PiakXhx+tCW2BV8ntVPauT6ERufR26HRCNh3yUUk1/bjywQDbY5uQnb1bVKNgS6MMrHktgS8y6ycsp//N6LRC3m7F5ldXuGn4r4V4IFcC8lKdHhnZwz2xJcgNKYQ7+2KRUJpI+3NMtOm6EZEqWxUPMxIaWf+kptA1QSb5or7vE9iWngkG5ao2Mr7ZWdswsaoJuzL7qVEZT29GxaDMFkRdkQpsH53LI6rW2lnejdtkmLiygeobkqkwiHmV48CtZPsLndhiL+tHSYozF7/BbsIhW4MW2KaKDi5HUkaK46kKrFhjwzv743DbzkVFKvuh7RHW2ObkVU9SucnQNpbPrF1HjA+YF3c5WG+onAAyDEtsYhGnv7uekgh8jYcyuuhnWldkKmtUpktlKRqQ1SZlULTOunQSTO2J7eS0vKYFMNEqhGfr2IaaJjy5XJKqyek4DqkHi6J0U0eyrcIdKb5Dn0mqQzP7ca+TBP25/TSt9lm2ptpooN5Pdgc1UinG8ZJNw0qtfvo9DDzV98FqseXN0pX+2Pu7CA/mNQFFPR62SkLD0XvMhXUjSNEbsAOuYHC0ozYJVlwYhtCjrdRft0dKrspknZUhG5S9J2dCqhj7S/+BC7N+GyrXnrHeT08Uo1L4pEaD+INy3TV9oRyro1Dphn0R58ZFBW1436t7SmV3CQqGGLIuuET1bcIFofoz7fxH67AJh+vPuhzg94olR2IbfEiqtHDjukWqcwmkMwgQG7kKb6Np/MjImnGCOoRn1Qq8+UNEfRzQOWo8EOAYXb413Fc5P2XP075jaXI8gEBsg4gy+QlSa3vRLtHTDEu+aX++lMl//IYY5k3GKkngfopxnQTwqFA7iMBa7mt9tWS1+c7X0JPmRc/qRjgu/R3RJy0SYqNkhlERLQwxEkHtUmKqidFappmzZoR/oNAjpew9g2FYxUW0/jfqvPLPa5/Vlz3sq/tzzZKbciU7mmr6jpvL7fx9ooBb+3AnHD5+rzwxYu4fiet497sX/ELbF7uf/V+JEEJxaEvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/cloud-enterprise-examples/static/bde63977b34a0d0c34e145622ad7d218/a45af/cloudnative.png",srcSet:["/cloud-enterprise-examples/static/bde63977b34a0d0c34e145622ad7d218/7fc1e/cloudnative.png 288w","/cloud-enterprise-examples/static/bde63977b34a0d0c34e145622ad7d218/a45af/cloudnative.png 400w"],sizes:"(max-width: 400px) 100vw, 400px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(n.b)("p",null,"The purpose of the Code Pattern is to provide the scaffold code for the elements outside of your working\nuse case business logic. This will then allow a developer to get started a\nlot quicker and allow you to push code regularly into your CI environment."),Object(n.b)("h2",null,"What constitutes a good code pattern"),Object(n.b)("p",null,"If you want to contribute a ",Object(n.b)("strong",{parentName:"p"},"Code Pattern")," have a look at the examples that are provided. They all have most of the\nfeatures listed below. They must be UBI (",Object(n.b)("a",i({parentName:"p"},{href:"https://www.redhat.com/en/blog/introducing-red-hat-universal-base-image"}),"Universal Base Image"),") based\nso they can run in Red Hat OpenShift as well as Kubernetes. They must have a ",Object(n.b)("inlineCode",{parentName:"p"},"Dockerfile")," that uses that UBI.\nTo make them work with continuous integration, you can provide a Jenkins or Tekton pipeline."),Object(n.b)("p",null,"Make sure there is a good use case that is repeatable in your solution architecture. Make sure the code is documented and includes a ",Object(n.b)("inlineCode",{parentName:"p"},"README.md"),". There is good code coverage for tests and you have integrated SonarQube code scanning on the build process.\nFinally them put in open source so other developers can enhance, improve or consume."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"README"),Object(n.b)("li",{parentName:"ul"},"License"),Object(n.b)("li",{parentName:"ul"},"Package.json"),Object(n.b)("li",{parentName:"ul"},"Use case example source code for example APIs, UIs, Dashboards, Machine learning models"),Object(n.b)("li",{parentName:"ul"},"Unit test framework"),Object(n.b)("li",{parentName:"ul"},"Pact test framework"),Object(n.b)("li",{parentName:"ul"},"Integration testing including User Experience tests"),Object(n.b)("li",{parentName:"ul"},"SonarQube scan integration"),Object(n.b)("li",{parentName:"ul"},"Dockerfile using Universal Base Image"),Object(n.b)("li",{parentName:"ul"},"Helm chart that is production ready"),Object(n.b)("li",{parentName:"ul"},"Jenkinsfile or Tekton pipeline that is production ready"),Object(n.b)("li",{parentName:"ul"},"Make it Open Source")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ci-cd-cloud-native-codepatterns-index-mdx-0c9e79a0ac71bd5e05e5.js.map