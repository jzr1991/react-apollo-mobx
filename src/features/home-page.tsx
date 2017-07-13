import * as React from 'react';
import Button from 'material-ui/Button';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import AddIcon from 'material-ui-icons/Add';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Titlebar, ContestWithData } from '../core/components';

const styleSheet = createStyleSheet('HomePage', (theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        padding: theme.spacing.unit,
    },
    demoTitle: {
        margin: '1.5em 0 0.5em 0',
    },
    demoContainer: {
        backgroundColor: theme.palette.background.contentFrame,
        padding: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        margin: theme.spacing.unit,
    }
}));

interface HomePageProps {
    // tslint:disable-next-line
    classes: any;
}

@observer
class HomePage extends React.Component<HomePageProps, {}> {

    @observable name = '';

    @action
    // tslint:disable-next-line
    onChange(event: any) {
        this.name = event.target.value;
    }

    render() {
        const { classes } = this.props;
        // const contestStore = new ContestStore();

        return (
            <div className={classes.root}>

                <Titlebar>React MobX MUI Typescript Seed</Titlebar>

                <div className={classes.content}>

                    <Typography type="title" className={classes.demoTitle}>
                        Buttons
                    </Typography>
                    <div className={classes.demoContainer}>
                        <Button raised={true} className={classes.button}>Default</Button>
                        <Button raised={true} color="primary" className={classes.button}>Primary</Button>
                        <Button raised={true} color="accent" className={classes.button}>Accent</Button>
                        <Button raised={true} color="contrast" className={classes.button}>Contrast</Button>
                        <Button raised={true} color="accent" disabled={true} className={classes.button}>Disabled</Button>
                        <Button fab={true} color="primary" className={classes.button}>
                            <AddIcon />
                        </Button>
                    </div>

                    <Typography type="title" className={classes.demoTitle}>
                        Apollo with Mobx demo
                    </Typography>
                    <div className={classes.demoContainer}>
                        <ContestWithData/>
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styleSheet)(HomePage);
