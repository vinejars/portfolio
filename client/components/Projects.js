import React, { Component } from 'react';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'

export default class Projects extends Component {
	render() {
		return (
			<div id='projoutside'>
				<div id='divcontain'>
					
					
					<img src='/tagged.png' width={200} alt={'logo for tagged'}/>
					<motion.div
						initial={{ x: -500 }}
						animate={{ x: 0 }}
						transition={{ duration: 1 }}
						className='projcontain'
						id='tagged'>				
						<a href='https://github.com/GH-Squirtle-Squad/tagged'>Github</a>
						<p> a crossplatform AR mobile app for virtual graffiti</p>
					</motion.div>
					
					
					<img src='/memester.png' width={200} alt={'logo for memester-ipsum'}/>
					<motion.div
						initial={{ x: -500 }}
						animate={{ x: 0 }}
						transition={{ duration: 1 }}
						className='projcontain'>					
						<a href='https://github.com/vinejars/memester-ipsum'>Github</a>
						<br />
						<a href='https://memesteripsum.herokuapp.com'> Live </a>
						<p>a meme-themed lorem ipsum generator</p>
					</motion.div>
						
						
					<img src='/mockulator.png' width={200} alt={'logo for mockulator'}/>
					<motion.div
						initial={{ x: -500 }}
						animate={{ x: 0 }}
						transition={{ duration: 1 }}
						className='projcontain'>
						<a href='https://github.com/vinejars/mockulator'>Github</a>
						<br />
						<a href='https://themockulator.herokuapp.com'> Live </a>
						<p>
							a 3 hour coding challenge to build a fullstack app and utilize
							regex
						</p>
					</motion.div>


					<img src='/dreamporium.png' width={200} alt={'logo for dreamporium'}/>
					<motion.div
						initial={{ x: -500 }}
						animate={{ x: 0 }}
						transition={{ duration: 1 }}
						className='projcontain'>
						<a href='https://github.com/sweet-dream-team/grace-shopper'>
							Github
						</a>
						<br />
						<a href='https://sweet-dream-team.herokuapp.com/'> Live </a>
						<p>a mock ecommerce site that sells dreams and nightmares</p>
					</motion.div>

				</div>
				<Link to='/main'> 
				<div id='backtomaindiv'>
				<img src='/back.png' id='backtomain'/>
				</div>
				</Link>
			</div>
		);
	}
}
