import React from 'react'
import Cal from './imgs/Group 1.png'
import Head from './imgs/Calendar 2021.png'
import arrow from './imgs/Group.png'
import circle from './imgs/Ellipse 1.png'
export default function LandingPage(props) {
  return (
    <div class='flex  w-screen h-screen dark:bg-primary align-middle'>
	    <div class="flex-col">
		<div class="flex md:justify-center"><img class="p-5" src={Head}/></div>
	    	<div class="flex justify-center"><img class="p-5 mt-12" src={Cal}/></div>
	    <div class=" font-bold bg-white rounded-2xl w-full mt-12">
		    <h1 class="text-3xl p-3">Hi Aman,</h1>
		    <p class="p-3">Welcome to your daily event calendar. Be more engaging & personalised than ever before. We’ll help you in Tracking Upcoming Events, Scheduling Meetings & Creating New Event!</p>

		<div class='flex w-full justify-center p-2'>
			<button class=" bg-orange-500 text-2xl rounded-md text-white" onClick={props.onClick}>
			<h1 class="p-1 w-28">Next</h1>
	    		</button>
		</div>
		</div>
	    </div>
	    
    </div>
  )
}
