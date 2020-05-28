# donations-feed
Frontend part of application that lets users to add donations and see information about them


WIP
# Implementation Logic
	1. Have 2 components – main and helper, which holds some items temporally, only to make second passing of items smooth
	2. Have some separator component between main and helper
	3. Have some flag that shows whether scrolling has started or no
	4. All the items are pushed into main component
	5. When main component holds more items than can be visible on screen, scrolling is started and the corresponding flag is set to TRUE
	6. When the main component reaches to its last (pre-last?) item, some amount of items are copied into helper component and it becomes visible
	7. When the separator component is reached to page's top corner:
		a. we stop the animation
		b. set helper component to be empty
		c. set the top position of the main component to be 0 (or something near), just not to let the content "jumps" during hiding helper and repositioning main components
		d. restart the animation

