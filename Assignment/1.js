// 1. What is the Big O for this?

// 1) Determine the Big O for the following algorithm:
// You are sitting in a room with 15 people. You want to
// find a playmate for your dog, preferably of the same
// breed. So you want to know if anyone out of the 15
// people have the same breed as your dog. You stand
// up and yell out, who here has a golden retriever and
// would like to be a playdate for my golden. Someone yells
// - "I do, be happy to bring him over"

// Constant Time-O(1) because yelling out into a room is asking all the people
// in the room at the same time.

// 2) Determine the Big O for the following algorithm: 
// You are sitting in a room with 15 people. You want 
// to find a playmate for your dog who is of the same 
// breed. So you want to know if anyone out of the 15 
// people have the same breed as your dog. You start 
// with the first person and ask him if he has a golden 
// retriever. He says no, then you ask the next person, 
// and the next, and the next until you find someone who 
// has a golden or there is no one else to ask.

// Linear Time-(O(n)) Because going through and asking one by
// one will increase the amount of time the task takes
// proportionately to the amount of people you have to ask