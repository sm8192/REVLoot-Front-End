# REVLoot-Application Startup <img src="https://img.shields.io/badge/RevLoot-Startup-orange"/>
In this section we will review the initial setup required to make application work.

## Getting Started  <img src="https://img.shields.io/badge/Ready-Set%20%26%20Go-brightgreen"/>
Here you will find some helpful guidance on how to locally build and run this project.

## Prerequisites  <img src="https://img.shields.io/badge/RevLoot-Requirement-critical"/>
For local development, please visit the following: [link](https://www.jetbrains.com/idea/download/#section=windows), [link2](https://code.visualstudio.com/download) to set up your development environment before building this project.

## Cloning & Building <img src="https://img.shields.io/badge/RevLoot-Build-success"/>
Once you have Angular CLI and the appropriate JDK(s) installed, clone the RevLoot repo locally. Cloning instructions can be found [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

<img src="https://img.shields.io/badge/RevLoot-Note-red"/>   
You would want to restore dependencies or install dependencies yourself, in order to avoid any dependency errors. 

REVLoot Front-End and Back-End:  
https://github.com/sm8192/REVLoot-Front-End.git  
https://github.com/sm8192/REVLoot-Back-End.git


# The Startup class  <img src="https://img.shields.io/badge/RevLoot-Start-blue"/>
- Service-Registry is the fisrt class to be executed when we launch the application.

#### We can distinguish the following setups:   
<img src="https://img.shields.io/badge/RevLoot-Setups-lightgrey"/>  

<img src="https://media.discordapp.net/attachments/958080472615899188/960984413129277490/unknown.png?width=1141&height=607"
 alt="Back-End Jenkins"
 style="float: left; margin-right: 10px" 
 width="400"/>   <img src="https://media.discordapp.net/attachments/958080472615899188/960996033788272661/unknown.png?width=1009&height=606"
 alt="Front-End Jenkins"
 style="float: left; margin-right: 10px" 
  width="350"/>                    
- Config-Server: Initialize and configures the blank to enable DI.
- Login-Service: Implements UserController REST Api
- Product-Service: Implements product details, images, pricing and name.
- Cloud-Gateway: Implements cloud based storage database 


