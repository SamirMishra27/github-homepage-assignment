import { MdArrowForwardIos } from 'react-icons/md'

export default function ReferenceLink({ title, link }: { title: string; link: string }) {
    return (
        <a href={link} className=" text-xl text-white group">
            {title}
            <MdArrowForwardIos className=" inline w-5 h-auto ml-2 group-hover:translate-x-2 transition" />
        </a>
    )
}
