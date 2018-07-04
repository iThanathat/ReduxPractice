export function setMemberName(name) {
    return {
        type: "MEMBER_NAME",
        name: name
    }
}
export function setBackground(name) {
    switch (name){
        case "Cherprang":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQejMpq3DkJW4HBd5liKR9I3xD1BgAS0vPbzR5jTwLrGFr-3KD2Bg"
            };
        case "Satchan":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0d6tb1UQy1GzHoySv8wtqxFXsld0pOuJBWGaySveMSwN7jhYUAg"
            }
        case "Orn":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTeFWy-O_KoYenVzwAocy1WKLjU4q1xYFn08ZGbHK38Kqapj0_g"
            }
        case "Mind":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zd-dksQpZFLosq1p3OgK3pn4-kiVuA0R0axb3ehScKrdDnLDiw"
            }
        case "Korn":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkabretRtLUS-xVb7sMNNOtbLEVSTR7oQN_DWt8TLfxLU6HikDlQ"
            }
        case "Pun":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXWuN01_V5Xbg-QlF-cl9cPt0CLwq8m-JshGEVnlwQeuTzpIVHA"
            }
        case "Tarwaan":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTvFKkxhLFAFM_hZFYYglGmAY2rqwj-XvaKRny-NMu4YBR8un"
            }
        case "Music":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS842BtD7xEBEArqqnRzHhoRFoqb9faSbk6z7NB-IoJoDTAkUw_"
            }
        case "Namsai":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9jKQ4V7QOcDI5v_OxC0fMLi_L_lB_FRlCy6FfNgYk9n2CGzgyZQ"
            } 
        case "Noey":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2ffUAg-KAPkPNSQ1m4q5O-ruDce78jWZ7p0y9oYkP8SpgBYLJg"
            }  
        case "Kaew":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuH9igEgKmKoKFL_IhnTFBjDJqexpE9IiUy6tzhuCjHJRIkTJ8"
            }              
        case "Kaimook":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEr9g5anh7moRR9D6Uuu05xoFbkjJrKdjMiW5XEbBpqHAbM3P"
            }                                                                                                               
        default:
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWvEKc9A_FcTO0Dv3e9gAYmlAil3D_thbuW-eOIfm_SZSnynDFg"
            }
    }
}