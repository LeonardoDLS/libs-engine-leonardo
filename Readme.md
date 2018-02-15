# Assessment Item Type | Reference Implementation


### Related documents & references


## 1. Getting started - Setup a starter project


## 2. Testing your Assessment Type 


## 3. Development process / worklflow


### 3.2 - Authoring Experience
TODO

## 4. Understanding the ENGINE interface


### 4.1 Public Methods 
These methods must be defined, as they will invoked by the platform.

#### 4.1.1


#### 4.1.2 
This function is called by the platform, when it needs information on engine's display characteristic or other configuration settings. 

#### 4.1.3 
This function is called by the platform, when it needs to know engine's current state:
 - It is submitted?
 - It is partially saved i.e. not submitted, but user's inputs are saved
 - Not sumbitted, Not saved i.e. user information could be lost (e.g. if browser closes)

#### 4.1.4 


#### 4.1.5 


#### 4.1.5 



### 4.2 Adaptor (platform) functions 
The engine can contact the platform via the  functions available in the adaptor object. 

#### 4.2.1 


#### 4.2.2 

#### 4.2.3 


## 5. Understanding the EDITOR interface
TODO


## 6. Integrating your Assessment type(s) with your Delivery Application


## 7. Integrating your Assessment type(s) with Builder
TODO
 


