import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = (props) => {

    const {name, role} = props;

    return (
        <section className="outerBox">
            <section className="outerBox__card">
                <p className="outerBox__card__name">{name}</p>
                <p className="outerBox__card__role">{role}</p>
            </section>
            <div className="outerBox__counter">
                    <p><Counter /></p>
            </div>
            
        </section>
    );
}

export default Employee;