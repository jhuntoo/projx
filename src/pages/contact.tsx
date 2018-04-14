import * as React from "react";
import injectSheet, {Styles} from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import {Theme} from 'material-ui';
import {CSSProperties} from 'react';

const styles = (theme?: Theme): Styles => ({});

const Contact = () => {
    return (
        <Main>
            <Article>
                <PageHeader title="Contact" />
                <Content>
                    Feel free to contact me by email: <Obfuscate email="greglobinski@gmail.com" /> or use the
                    form below.
                </Content>
                <Form />
            </Article>
        </Main>
    );
};

interface ContactProps  {
    classes: any;
}

export default injectSheet(styles)(Contact);
