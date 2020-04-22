import React, { Component } from 'react'
import Link from 'next/link'

export default class Help extends Component {
    render() {
        return (
            <div>
                <Link href="help">This is my help</Link>
            </div>
        )
    }
}
