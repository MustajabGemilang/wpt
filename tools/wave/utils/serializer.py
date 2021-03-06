from __future__ import unicode_literals

def serialize_session(session):
    return {
        "token": session.token,
        "types": session.types,
        "user_agent": session.user_agent,
        "labels": session.labels,
        "timeouts": session.timeouts,
        "test_state": session.test_state,
        "last_completed_test": session.last_completed_test,
        "tests": session.tests,
        "pending_tests": session.pending_tests,
        "running_tests": session.running_tests,
        "status": session.status,
        "browser": session.browser,
        "date_started": session.date_started,
        "date_finished": session.date_finished,
        "is_public": session.is_public,
        "reference_tokens": session.reference_tokens,
        "webhook_urls": session.webhook_urls,
        "expiration_date": session.expiration_date,
        "malfunctioning_tests": session.malfunctioning_tests
    }
