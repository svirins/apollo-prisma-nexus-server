import {objectType, enumType} from '@nexus/schema'

export const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id(),
        t.model.name(),
        t.model.email(),
        t.model.groups({pagination: false}),
        t.model.events({pagination: false}),
        t.model.profile({
            type: 'Profile'
        })
    }
})

export const Profile = objectType({
    name: 'Profile',
    definition(t) {
        t.model.id(),
        t.model.socialId(),
        t.model.authType(),
        t.model.verified()
    }
})

export const Group = objectType({
    name: 'Group',
    definition(t) {
        t.model.id(),
        t.model.createdAt(),
        t.model.birthday(),
        t.model.author(),
        t.model.name(),
        t.model.description(),
        t.model.city(),
        t.model.region(),
        t.model.isActive(),
        t.model.phone(),
        t.model.email(),
        t.model.address(),
        t.model.website(),
        t.model.location({
            type: 'Location',
        }),
        t.model.meetings({pagination: false})
    }
})

export const Meeting = objectType({
    name: 'Meeting',
    definition(t) {
        t.model.id(),
        t.model.group(),
        t.model.name(),
        t.model.weekday(),
        t.model.time(),
        t.model.type()
    }
})

export const Event = objectType({
    name: 'Event', 
    definition(t) {
        t.model.id(),
        t.model.author(),
        t.model.name(),
        t.model.dateStart(),
        t.model.dateEnd(),
        t.model.city(),
        t.model.location({
            type: 'Location',
        }),
        t.model.address(),
        t.model.description(),
        t.model.agenda(),
        t.model.contact(),
        t.modal.programUrl()
    }
})

export const Location = objectType({
    name: 'Location',
    definition(t) {
        t.model.id(),
        t.model.groupRel(),
        t.model.eventRel(),
        t.model.latitude(),
        t.model.longitude()
    }
})

export const Contact = objectType({
    name: 'Contact',
    definition(t) {
        t.model.id(),
        t.model.eventRel(),
        t.model.name(),
        t.model.phone(),
        t.model.responsibility()
    }
})


export const WeekdayEnum = enumType({
    name: 'WeekdayEnum',
    members: [  'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
})

export const MeetingEnum = enumType({
    name: 'MeetingEnum',
    members: [  'Open', 'Closed', 'Speaker', 'TwelveSteps', 'Reflections']
})

export const RegionEnum = enumType({
    name: 'RegionEnum',
    members: [  'All', 'Minskaya', 'Brestskaya', 'Gomelskaya', 'Mogilevskaya', 'Grodnenskaya', 'Vitebskaya']
})

export const AuthTypeEnum = enumType({
    name: 'AuthTypeEnum',
    members: [  'Email', 'Facebook', 'Google', 'Apple']
})

export const AuthPayload = objectType({
    name: 'AuthPayload',
    definition(t) {
        t.string('token'),
        t.field('user', {type: 'User'} )
    }    
})
