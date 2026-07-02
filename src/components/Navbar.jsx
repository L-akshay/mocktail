"use client";

import "../lib/registerGsap.js";
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backdropFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
 
 return (
	<nav>
	 <div>
		<Link href="/" className="flex items-center gap-2">
		 <img src="/images/logo.png" alt="logo" />
		 <p>Velvet Pour</p>
		</Link>
		
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <Link href={link.href}>{link.title}</Link>
			</li>
		 ))}
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar
