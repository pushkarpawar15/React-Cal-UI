import React from 'react'
import group14 from './imgs/Group 14.png'
export default function Upcoming(props) {
  return (
    <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-white bg-gray-50 rounded-b mt-16">
			    <h1 class="text-2xl p-2">Upcoming events</h1>
			    <div class="flex p-2">
				    <img class="p-2" src={group14}/>
				    <img class="p-2" src={group14}/>
          </div>
			<div class="w-full flex justify-center">
				<button onClick={props.onClick} class="bg-orange-400 w-1/3 p-1 rounded-xl mt-10">Add Event</button>
		</div>
    </div>
  )
}
