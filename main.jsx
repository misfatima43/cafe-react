import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
const menu=[
 {name:'Honey Oat Latte',type:'Coffee',price:'$4.80',desc:'Espresso, oat milk, local honey'},
 {name:'Flat White',type:'Coffee',price:'$4.20',desc:'Double espresso with silky milk'},
 {name:'Iced Vanilla Cold Brew',type:'Cold',price:'$4.60',desc:'Slow-steeped coffee, house vanilla'},
 {name:'Pistachio Croissant',type:'Bakery',price:'$4.50',desc:'Buttery pastry, pistachio cream'},
 {name:'Lemon Olive Oil Cake',type:'Bakery',price:'$5.20',desc:'Bright citrus, tender crumb'},
 {name:'Matcha Cloud',type:'Cold',price:'$5.00',desc:'Ceremonial-style matcha, chilled milk'}
];
function App(){
 const [filter,setFilter]=useState('All'); const [sent,setSent]=useState(false);
 const items=filter==='All'?menu:menu.filter(m=>m.type===filter);
 function submit(e){e.preventDefault();setSent(true);e.currentTarget.reset()}
 return <><header><a className="logo" href="#">juniper<span> café</span></a><nav><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#visit">Visit us</a><a className="reserve" href="#reserve">Book a table</a></nav></header>
 <main><section className="hero"><div className="hero-copy"><p className="eyebrow">YOUR NEIGHBORHOOD SLOWDOWN</p><h1>Good coffee.<br/><i>Good company.</i></h1><p>A little corner for long conversations, fresh pastries, and coffee made with care.</p><a className="dark-button" href="#menu">Explore our menu ↘</a></div><div className="coffee-art"><div className="sun"></div><div className="cup">☕</div><span>TAKE A MOMENT</span></div></section>
 <section id="story" className="story"><p className="eyebrow">A PLACE TO PAUSE</p><h2>Made slowly, served warmly.</h2><p>Juniper Café is a concept café celebrating seasonal ingredients, carefully brewed coffee, and the small rituals that make a day feel special.</p></section>
 <section id="menu" className="menu"><p className="eyebrow">FROM OUR COUNTER</p><h2>Something lovely</h2><div className="tabs">{['All','Coffee','Cold','Bakery'].map(t=><button key={t} onClick={()=>setFilter(t)} className={filter===t?'selected':''}>{t}</button>)}</div><div className="menu-grid">{items.map((m,i)=><article key={m.name}><span className="number">0{i+1}</span><div><h3>{m.name}</h3><p>{m.desc}</p></div><strong>{m.price}</strong></article>)}</div></section>
 <section id="visit" className="visit"><div><p className="eyebrow">COME SAY HELLO</p><h2>Your new favorite<br/>corner awaits.</h2><p>12 Garden Lane · Example City</p><p>Mon–Fri 7:30–18:00 · Sat–Sun 8:00–17:00</p></div><form id="reserve" onSubmit={submit}><h3>Plan a visit</h3><label>Your name<input required name="name" placeholder="Name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Preferred date<input required type="date" name="date"/></label><label>Guests<select name="guests"><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select></label><button className="dark-button">Request a table</button>{sent&&<p role="status" className="success">Demo request received. No booking was sent to a real café.</p>}</form></section>
 <footer><span>juniper café · Portfolio concept</span><span>Made with care, and React.</span></footer></main></>
}
createRoot(document.getElementById('root')).render(<App/>);
