Types of memory:
1) Stack Memory
2) Heap Memory


// let myyoutubename = "Ashish Raj"

// let newname = myyoutubename
// newname = "hello"

// console.log(myyoutubename)  "CONCEPT OF STACK"
// console.log(newname)

let userone = {
    email: "Ashishraj@gmail.com",
    upiId: "Ashish@ybl"
  }

  console.log(userone)

let  usertwo = userone;

usertwo.email = "mota@gmail.com";

console.log(userone)
