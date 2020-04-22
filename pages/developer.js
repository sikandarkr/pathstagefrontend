import React, { Component } from 'react'
import Link from 'next/link'

export default class Developer extends Component {
    render() {
        return (
            <div>
                <Link href='developer'>This is my devloper page</Link>
            </div>
        )
    }
}
