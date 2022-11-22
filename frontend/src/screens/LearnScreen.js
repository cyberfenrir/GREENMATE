import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"


const LearnScreen = () => {

	return(
		<div>
			<ListGroup variant="flush" className="p-5 m-5 w-10 ">
				<ListGroup.Item><Link style={{ textDecoration: 'none' }} to={"/learn/1"}><Learnit  title={"5 plants you should have in your backyard"} date={"2022-10-21"} /></Link></ListGroup.Item>
				<ListGroup.Item><Link style={{ textDecoration: 'none' }} to={"/learn/2"}><Learnit title={"Indoor plant that will enrich your room"} date={"2022-10-04"} /></Link></ListGroup.Item>
				<ListGroup.Item><Link style={{ textDecoration: 'none' }} to={"/learn/3"}><Learnit title={"Essential gardening tools for your garden"} date={"2022-10-01"} /></Link></ListGroup.Item>
			</ListGroup>
		</div>

	)



}

const Learnit = ({title, date}) => {
	
	return(
		<>
		<p>{date}</p>
		<h3>{title}</h3>
		</>
	)
 
}

export default LearnScreen