import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9RsMwS_m8aQOw4zsiT8r90KmdU2cMDT8o0QsMAZvzbyfGedcl&usqp=CAU',
                followed: false,
                fullName: 'Aleksey',
                status: 'I am a boss',
                location: { city: 'Ekaterinburg', country: 'Russia' }
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9RsMwS_m8aQOw4zsiT8r90KmdU2cMDT8o0QsMAZvzbyfGedcl&usqp=CAU',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: { city: 'Mosko2', country: 'Russia' }
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9RsMwS_m8aQOw4zsiT8r90KmdU2cMDT8o0QsMAZvzbyfGedcl&usqp=CAU',
                followed: false,
                fullName: 'Adrey',
                status: 'I am a boss',
                location: { city: 'Egorhino', country: 'Russia' }
            }
        ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;