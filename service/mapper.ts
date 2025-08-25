
export const userStoryMapper = (data: any) =>{
    return { 
        id: data?.key,
        summary: data?.fields?.summary,
        reporter: data?.fields?.reporter?.displayName,
        assignee: data?.fields?.assignee?.displayName,
        issueType: data?.fields?.issuetype?.name,
        priority: data?.fields?.priority?.name,
        status: data?.fields?.status?.name,
        description: data?.fields?.description,
        epic: {
            id: data?.fields?.epic?.key,
            link: data?.fields?.epic?.self,
            name: data?.fields?.epic?.name,
            summary: data?.fields?.epic?.summary,
            done: data?.fields?.epic?.done
        },
        team: {
            id: data?.fields?.customfield_16473?.id,
            name: data?.fields?.customfield_16473?.value,
            link: data?.fields?.customfield_16473?.self,

        },
        acceptanceCriteria: data?.fields?.customfield_10777,
        sprint: {
            id: data?.fields?.sprint?.id,
            link: data?.fields?.sprint?.self,
            state: data?.fields?.sprint?.state,
            name: data?.fields?.sprint?.name,
            startDate: data?.fields?.sprint?.startDate,
            endDate: data?.fields?.sprint?.endDate,
            goal: data?.fields?.sprint?.goal
        },
        attachments: data?.fields?.attachment?.map((attachment:any) => ({
            id: attachment?.id,
            author: attachment?.author?.displayName,
            name: attachment?.filename,
            link: attachment?.content

        })) || [],
        comments: data?.fields?.comment?.comments?.map((comment: any) => ({
            author: comment?.author?.displayName,
            body: comment?.body,
            date: comment?.updated
        })) || []

    }
}