const express = require('express')
const app = express()
const port = 5004


app.get("/home",(req, res)=>{
 res.send('Hi welcome to homepage')
})

app.get("/dashboard",(req, res)=>{
 res.send('Hi welcome to dashboard')
})

app.get("/signin",(req, res)=>{
 res.send('Hi please sign in')
})

let Cities = [
    {id:1, name: "Ogbomosho", State: "Oyo State", Region:"South-west", img:"https://imgs.search.brave.com/qaCxuq7q51B4q7hSbxL8cbxzWkz2063RReTrX9cYEXs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2Y2L1NvdW5fb2Zf/T2dib21vc2hvX3Bh/bGFjZTUuanBn"},
    {id:1, name: "Ibadan", State: "Oyo State", Region:"South-west", img:"https://imgs.search.brave.com/jZ0vfFLRXzkMB65BZ8iXiqJSYPmGvedI9lbGLl3KXp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mb2xs/b3dpbmctZWxlY3Rp/b24tbmV3LXByZXNp/ZGVudC1uaWdlcmlh/bi1lY29ub215LXVu/ZGVyZ29lcy1zZXJp/ZXMtc2hpZnRzLXRy/YW5zZm9ybWF0aW9u/cy11bml2ZXJzaXR5/LWliYWRhbi1veW8t/MjgwNjQ3NzAyLmpw/Zw"},
    {id:1, name: "Lagos", State: "Lagos State", Region:"South-west", img:"https://imgs.search.brave.com/NpQ8e1m6hTBCmvTZRfkGr4pW7kvpuoCC_Xy0Vg79yC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFlL0VLT19ob3Nw/aXRhbF9WaWN0b3Jp/YV9Jc2xhbmQsTGFn/b3MuanBn"},
    {id:1, name: "Oshogbo", State: "Osun State", Region:"South-west", img:"https://imgs.search.brave.com/tP69fCcEd0YUDfzfX33HOu4dVWOkdkhi8TjyOhiMj-A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9oaXN0/b3JpYWRlc2Nvbm9j/aWRhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMi9P/c2hvZ2JvMS0yLmpw/Zw"},
    {id:1, name: "Ede", State: "Osun State", Region:"South-west", img:"https://imgs.search.brave.com/hwbGzaMSJdoSqXrbz0x9q0qdXuIRb-VzjvPdY7H4NDU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/Y29oZXJlbnRjb21t/b25zLmNvbS80MDB4/NjAwL2FydGlmYWN0/cy9hcnRpZmFjdC9p/bWcvNTNjY2NmYjQt/ZWRhMi00NmZkLTlm/MzUtNmE0Yjg5MDY1/Y2I2LmpwZw"},
    {id:1, name: "ILorin", State: "Kwara State", Region:"North-central", img:"https://imgs.search.brave.com/wa6QGCPFi8_XNuzAZ7Ix07h-KeuTT58qi9p4FGVUPAU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MjA3NzA4NS9waG90/by90aGlzLWdlbmVy/YWwtdmlldy1zaG93/cy10aGUtbWFya2V0/LWluLWZyb250LW9m/LXRoZS1nZW5lcmFs/LXBvc3Qtb2ZmaWNl/LWluLWlsb3Jpbi1v/bi1hcHJpbC0yMi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TkUxNV9uN19kRW1G/LTRFSkQ2WnRoSGJZ/ekN0YnlxeWlWUXJQ/eEsyWnRRMD0"},
    {id:1, name: "Offa", State: "Kwara State", Region:"North-central", img:"https://imgs.search.brave.com/x6UVdtGH9QUvLiTRN8W82fjhvUmRJlQgKzbBnDOfrMg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FhL0VudHJhbmNl/X29mX09sb2ZhX29m/X09mZmFfcGFsYWNl/Ll9PZmZhX0t3YXJh/X1N0YXRlLmpwZw"},
    {id:1, name: "Minna", State: "Niger State", Region:"North-central", img:"https://imgs.search.brave.com/oAB8nBKQi_EbBGBl3DUFUVyBSQDUI06ZV0rHZwQHbAk/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNiL01pbm5hX2Jh/bm5lcl9waG90b3dh/bGtfY2l0eV92aWV3/LmpwZw"},
    {id:1, name: "Sokoto", State: "Sokoto State", Region:"North-west", img:"https://imgs.search.brave.com/XWuDL1EZfRCgOY6YMycjmSC1p7J6UW46bG3y9Ly9wJQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/NTUzNTA5NS9mci9w/aG90by9tb3Rvci1i/aWtlLXRheGlzLWRy/aXZlLXBhc3Qta29m/YXItYWxpeXUtamVk/by1hLWNpdHktZ2F0/ZS1pbi1hbmNpZW50/LXNva290by1ub3J0/aHdlc3QtbmlnZXJp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9R3FsaF90OXB0/b0ZFbmwwMGJOdWo1/R3BfMHJ4WVI4SXlU/bmxIOUdCNFdxYz0"},
    
]

app.get("/", (req, res)=>{
    res.send(Cities)
})




app.listen(port, ()=>{
    console.log("server starts");
    
})