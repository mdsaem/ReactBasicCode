import React from 'react';
import './App.css';

import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Countvalue from './components/Countvalue'
import FunctionClick from './components/FunctionClick'
import Class from './components/Class'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Indexandkey from './components/Indexandkey'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form' 

import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import RefDemo from './components/RefDemo'
import FocusInput from './components/FocusInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'



function App() {
    return ( <div className = "App" >
        <Hero heroName = "superMan" />
        <Hero heroName = "BatMan" />
        <Hero heroName = "joker" />
        <FocusInput />
        < PortalDemo />

     //    <FragmentDemo />
     //    <Table />
     //    <Form />
     //    <LifecycleA />
     //    <RefDemo />

     //    <Stylesheet primary = {true} />
     //    <Indexandkey />
     //    <NameList />
     //    <UserGreeting />
     //    <ParentComponent />
     //    <FunctionClick />
     //    <EventBind />
     //    <Class />
    	//    <Countvalue />
     //     <Message />
    	// <Greet name = "sohag" heroName="batMan" />
    	// <p>This Is children</p>
    	// <Greet />
    	// <Greet name = "Saem" heroName="superMan"  />
    	// <button>Action</button>
    	// <Greet />
    	// <Greet name = "Lingkon" heroName="HeroMan" />
    	// <p>This Is children</p>
    	// <Greet />
     //    <Welcome name = "sohag" heroName="batMan" />
     //    <Welcome name = "Saem" heroName="superMan" />
     //    <Welcome name = "Lingkon" heroName="HeroMan" />
     //    <Hello /> 
     

       </div>
    );
}

export default App;