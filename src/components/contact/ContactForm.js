import React from 'react'
import Heading from "../resuable/Heading"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function ContactForm() {

    const useStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
            textTransform: 'capitalize',
        },
    });

    const inputStyle = {
        width: "inherit",
        margin: "10px"
    }
    const buttonStyle = {
        marginLeft: "auto",
        marginRight: "auto"
    }

    const classes = useStyles();
    return (
        <section className="my-2">
            <div className="container">
                <Heading title="Contact us" />
                <TextField id="id-name" label="Name" variant="outlined" style={inputStyle} />
                <TextField id="id-email" label="Email" variant="outlined" style={inputStyle} />
                <TextField
                    id="id-message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={inputStyle}
                />
                <div className="text-center">
                    <Button
                        classes={{
                            root: classes.root, // class name, e.g. `classes-nesting-root-x`
                            label: classes.label, // class name, e.g. `classes-nesting-label-x`
                        }}
                        style={buttonStyle}
                    >
                        Submit
                </Button>
                </div>
            </div>
        </section>
    )
}
