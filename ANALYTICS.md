# Analytics event contract

No analytics provider is installed. `track()` dispatches a local `aits:analytics` CustomEvent with the event name and non-personal route/language context. No cookies, browser persistence or network transmission are used. A future adapter may subscribe to this event and forward approved fields after the site's consent/privacy requirements are implemented.

| Event              | Trigger                            | Meaning                                                                |
| ------------------ | ---------------------------------- | ---------------------------------------------------------------------- |
| site_survey_start  | First focus in a form              | Form interaction, not a lead                                           |
| site_survey_submit | Successful mock validation         | Test completion, `mode: mock`; must be excluded from real lead reports |
| line_click         | Verified LINE anchor click         | Messaging intent, not a sent message or lead                           |
| phone_click        | Telephone anchor click             | Call intent, not a completed call                                      |
| service_view       | Solution route loads               | Page view; filter the hub if measuring only details                    |
| project_view       | Project route loads                | Page view; filter the hub if measuring only cases                      |
| service_to_contact | Solution visitor clicks survey CTA | Enquiry intent                                                         |
| support_contact    | Support contact selection          | Existing-customer contact intent                                       |

Do not include name, phone, email, location, requirement text or uploaded material in events. A production submission event must carry a non-personal delivery identifier only after provider acceptance, then be joined to qualified enquiry, booked survey and quotation outcomes in the receiving system. Track intent and confirmed delivery separately. Do not enable tracking by merely adding an ID to client code.
