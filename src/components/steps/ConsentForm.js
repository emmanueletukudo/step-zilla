import react from 'react';

const ConcentForm = () => {
    return (
        <div>

            <form className="mb-3">
            <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
               
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Save my details</label>
                </div>
            </form>

        </div>
    )
}

export default ConcentForm;
