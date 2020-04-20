// Generated from Airline.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export type TakeOff = {
}
export const TakeOff: daml.Serializable<TakeOff> = ({
  decoder: () => jtv.object({
  }),
})

export type Onboard = {
  passenger: daml.Party;
}
export const Onboard: daml.Serializable<Onboard> = ({
  decoder: () => jtv.object({
    passenger: daml.Party.decoder(),
  }),
})

export type AssignSeat = {
  passenger: daml.Party;
  ticketRef: string;
  seat: string;
}
export const AssignSeat: daml.Serializable<AssignSeat> = ({
  decoder: () => jtv.object({
    passenger: daml.Party.decoder(),
    ticketRef: daml.Text.decoder(),
    seat: daml.Text.decoder(),
  }),
})

export type Flight = {
  seatClasses: { [key: string]: Class };
  allocation: { [key: string]: string };
  flightNumber: string;
  airline: daml.Party;
  invitedPassengers: daml.Party[];
  passengers: daml.Party[];
}
export const Flight: daml.Template<Flight, undefined, '49011707cbe435848abc7a5b6c0407b157178b60d8f5d9d374e2ac3ef5a2957f:Airline:Flight'> & {
  Archive: daml.Choice<Flight, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  TakeOff: daml.Choice<Flight, TakeOff, {}, undefined>;
  AssignSeat: daml.Choice<Flight, AssignSeat, daml.ContractId<Flight>, undefined>;
  Onboard: daml.Choice<Flight, Onboard, daml.ContractId<Flight>, undefined>;
} = {
  templateId: '49011707cbe435848abc7a5b6c0407b157178b60d8f5d9d374e2ac3ef5a2957f:Airline:Flight',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    seatClasses: daml.TextMap(Class).decoder(),
    allocation: daml.TextMap(daml.Text).decoder(),
    flightNumber: daml.Text.decoder(),
    airline: daml.Party.decoder(),
    invitedPassengers: daml.List(daml.Party).decoder(),
    passengers: daml.List(daml.Party).decoder(),
  }),
  Archive: {
    template: () => Flight,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
  TakeOff: {
    template: () => Flight,
    choiceName: 'TakeOff',
    argumentDecoder: TakeOff.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
  AssignSeat: {
    template: () => Flight,
    choiceName: 'AssignSeat',
    argumentDecoder: AssignSeat.decoder,
    resultDecoder: () => daml.ContractId(Flight).decoder(),
  },
  Onboard: {
    template: () => Flight,
    choiceName: 'Onboard',
    argumentDecoder: Onboard.decoder,
    resultDecoder: () => daml.ContractId(Flight).decoder(),
  },
};
daml.registerTemplate(Flight);

export type CheckIn = {
  flightCid: daml.ContractId<Flight>;
  seat: string;
}
export const CheckIn: daml.Serializable<CheckIn> = ({
  decoder: () => jtv.object({
    flightCid: daml.ContractId(Flight).decoder(),
    seat: daml.Text.decoder(),
  }),
})

export type Ticket = {
  ticketClass: Class;
  ticketRef: string;
  flightNumber: string;
  airline: daml.Party;
  passenger: daml.Party;
  seatNumber: daml.Optional<string>;
  seatChoice: boolean;
}
export const Ticket: daml.Template<Ticket, undefined, '49011707cbe435848abc7a5b6c0407b157178b60d8f5d9d374e2ac3ef5a2957f:Airline:Ticket'> & {
  CheckIn: daml.Choice<Ticket, CheckIn, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<daml.ContractId<Ticket>, daml.ContractId<Flight>>, undefined>;
  Archive: daml.Choice<Ticket, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: '49011707cbe435848abc7a5b6c0407b157178b60d8f5d9d374e2ac3ef5a2957f:Airline:Ticket',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    ticketClass: Class.decoder(),
    ticketRef: daml.Text.decoder(),
    flightNumber: daml.Text.decoder(),
    airline: daml.Party.decoder(),
    passenger: daml.Party.decoder(),
    seatNumber: daml.Optional(daml.Text).decoder(),
    seatChoice: daml.Bool.decoder(),
  }),
  CheckIn: {
    template: () => Ticket,
    choiceName: 'CheckIn',
    argumentDecoder: CheckIn.decoder,
    resultDecoder: () => pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(daml.ContractId(Ticket), daml.ContractId(Flight)).decoder(),
  },
  Archive: {
    template: () => Ticket,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(Ticket);

export type Accept_Invite = {
  flightCid: daml.ContractId<Flight>;
}
export const Accept_Invite: daml.Serializable<Accept_Invite> = ({
  decoder: () => jtv.object({
    flightCid: daml.ContractId(Flight).decoder(),
  }),
})

export type FlightInvite = {
  ticket: Ticket;
}
export const FlightInvite: daml.Template<FlightInvite, undefined, '49011707cbe435848abc7a5b6c0407b157178b60d8f5d9d374e2ac3ef5a2957f:Airline:FlightInvite'> & {
  Accept_Invite: daml.Choice<FlightInvite, Accept_Invite, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<daml.ContractId<Ticket>, daml.ContractId<Flight>>, undefined>;
  Archive: daml.Choice<FlightInvite, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: '49011707cbe435848abc7a5b6c0407b157178b60d8f5d9d374e2ac3ef5a2957f:Airline:FlightInvite',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    ticket: Ticket.decoder(),
  }),
  Accept_Invite: {
    template: () => FlightInvite,
    choiceName: 'Accept_Invite',
    argumentDecoder: Accept_Invite.decoder,
    resultDecoder: () => pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(daml.ContractId(Ticket), daml.ContractId(Flight)).decoder(),
  },
  Archive: {
    template: () => FlightInvite,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(FlightInvite);

export type Class = 
  | 'Coach'
  | 'Business'
  | 'First'
export const Class: daml.Serializable<Class> & { readonly keys: Class[] } & { readonly [e in Class]: e } = {
  Coach: 'Coach',
  Business: 'Business',
  First: 'First',
  keys: ['Coach','Business','First',],
  decoder: () => jtv.oneOf<Class>(
      jtv.constant(Class.Coach),
      jtv.constant(Class.Business),
      jtv.constant(Class.First),
  ),
};
