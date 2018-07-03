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
                background: "https://i.pinimg.com/originals/18/61/29/18612970368b6f38ded93ccdb96d18d5.jpg"
            };
        case "Satchan":
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9M2snj-TfZul1va_pqWXp9EBv2XeUuuKxBdKd2N2F77TMlMR"
            }
        default:
            return {
                type: "MEMBER_PIC",
                background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWvEKc9A_FcTO0Dv3e9gAYmlAil3D_thbuW-eOIfm_SZSnynDFg"
            }
    }
}