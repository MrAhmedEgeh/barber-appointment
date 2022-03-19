import Input from './Input';

function Form({Fields}) {
    return(
            <form>
            <h3>BOOK YOU APPOINTMENT</h3>
            {Fields.map((field) => (
                    <div className="row">
                        {
                        field.map((f, index) => (
                            field.length !== 1 ?
                            <div className="col">
                            {
                                <Input
                                key={index}
                                type={f.type}
                                placeholder={f.placeholder} />
                            }
                            </div>
                            :
                            <Input 
                            key={index}
                            type={f.type}
                            placeholder={f.placeholder}
                            id={f.id}
                            disable={f.disable === undefined ? '' : f.disable} />
                        ))
                        }
                    </div>
                ))}
            <button>Book Appointment</button>
            </form>
      );
}

export default Form;
