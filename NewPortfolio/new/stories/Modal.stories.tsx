import type {Meta,StoryObj} from "@storybook/react"
import Modal from "./Modal"
import React from "react"
// import SendEmail from "@/public/MingcuteMailSendLine.svg"

const ModalMeta = {
    title: "Example/Modal",
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default ModalMeta
type ModalStory = StoryObj<typeof ModalMeta>

export const ExampleModalStory: ModalStory = {
    args: {
        modal_id: "modal-1",
        children: "This is a modal",
        backdrop: true,
        button: <symbol viewBox="0 0 24 24" id="mingcute-mail-send-line"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M20 4a2 2 0 0 1 1.995 1.85L22 6v12a2 2 0 0 1-1.85 1.995L20 20H4a2 2 0 0 1-1.995-1.85L2 18v-1h2v1h16V7.414l-6.94 6.94a1.5 1.5 0 0 1-2.007.103l-.114-.103L4 7.414V8H2V6a2 2 0 0 1 1.85-1.995L4 4zM6 13a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm12.586-7H5.414L12 12.586zM5 10a1 1 0 0 1 .117 1.993L5 12H2a1 1 0 0 1-.117-1.993L2 10z"></path></g></symbol>
    },
} 
